"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Plus, Pencil, Trash2, X, Upload, Loader2, Check } from 'lucide-react';

type Medico = {
    id: string;
    nome: string;
    crm: string;
    especialidade: string;
    bio: string | null;
    foto: string | null;
    tags: string | null;
    precoConsulta: number;
};

const emptyForm = {
    nome: '',
    crm: '',
    especialidade: '',
    bio: '',
    foto: '',
    tags: '',
    precoConsulta: 150,
};

export default function AdminEquipePage() {
    const [medicos, setMedicos] = useState<Medico[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState(emptyForm);
    const [saving, setSaving] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);

    const fetchMedicos = async () => {
        setLoading(true);
        const res = await fetch('/api/admin/medicos');
        const data = await res.json();
        setMedicos(data);
        setLoading(false);
    };

    useEffect(() => { fetchMedicos(); }, []);

    const openAdd = () => {
        setEditingId(null);
        setForm(emptyForm);
        setShowModal(true);
    };

    const openEdit = (m: Medico) => {
        setEditingId(m.id);
        setForm({
            nome: m.nome,
            crm: m.crm,
            especialidade: m.especialidade,
            bio: m.bio || '',
            foto: m.foto || '',
            tags: m.tags || '',
            precoConsulta: m.precoConsulta,
        });
        setShowModal(true);
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const fd = new FormData();
        fd.append('file', file);
        const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
        const data = await res.json();
        if (data.url) setForm(f => ({ ...f, foto: data.url }));
        setUploading(false);
    };

    const handleSave = async () => {
        setSaving(true);
        setFeedback(null);
        try {
            const url = editingId ? `/api/admin/medicos/${editingId}` : '/api/admin/medicos';
            const method = editingId ? 'PUT' : 'POST';
            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Erro ao salvar');
            setFeedback({ type: 'success', msg: editingId ? 'Médico atualizado!' : 'Médico adicionado!' });
            setShowModal(false);
            fetchMedicos();
        } catch (err: any) {
            setFeedback({ type: 'error', msg: err.message });
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Tem certeza que deseja remover este médico do site?')) return;
        const res = await fetch(`/api/admin/medicos/${id}`, { method: 'DELETE' });
        if (res.ok) {
            setFeedback({ type: 'success', msg: 'Médico removido!' });
            fetchMedicos();
        } else {
            setFeedback({ type: 'error', msg: 'Erro ao remover médico.' });
        }
    };

    return (
        <div className="flex flex-col gap-8 animate-fade-in max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-text-primary">Equipe do Site</h1>
                    <p className="text-text-secondary mt-1">Gerencie os médicos exibidos na página pública.</p>
                </div>
                <button
                    onClick={openAdd}
                    className="btn-primary flex items-center gap-2"
                >
                    <Plus size={18} /> Adicionar Médico
                </button>
            </div>

            {/* Feedback */}
            {feedback && (
                <div className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold ${feedback.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                    {feedback.type === 'success' ? <Check size={16} /> : <X size={16} />}
                    {feedback.msg}
                    <button className="ml-auto" onClick={() => setFeedback(null)}><X size={14} /></button>
                </div>
            )}

            {/* Grid de médicos */}
            {loading ? (
                <div className="flex items-center justify-center py-24">
                    <Loader2 size={40} className="animate-spin text-primary" />
                </div>
            ) : medicos.length === 0 ? (
                <div className="bg-white rounded-2xl border border-border p-16 text-center">
                    <p className="text-text-secondary text-lg mb-4">Nenhum médico cadastrado ainda.</p>
                    <button onClick={openAdd} className="btn-primary">Adicionar o primeiro médico</button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {medicos.map(m => (
                        <div key={m.id} className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            {/* Foto */}
                            <div className="h-48 bg-primary/10 relative flex items-center justify-center">
                                {m.foto ? (
                                    <Image src={m.foto} alt={m.nome} fill className="object-cover" />
                                ) : (
                                    <div className="flex flex-col items-center gap-2 text-primary/40">
                                        <Upload size={32} />
                                        <span className="text-xs font-medium">Sem foto</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-text-primary text-lg">{m.nome}</h3>
                                <p className="text-xs font-bold text-coral uppercase tracking-wide mt-1">{m.especialidade}</p>
                                <p className="text-xs text-text-secondary mt-0.5">{m.crm}</p>
                                {m.bio && <p className="text-sm text-text-secondary mt-3 line-clamp-2">{m.bio}</p>}
                                {m.tags && (
                                    <div className="flex flex-wrap gap-1 mt-3">
                                        {m.tags.split(',').map((t, i) => (
                                            <span key={i} className="text-[10px] font-semibold text-coral bg-coral/10 px-2 py-0.5 rounded border border-coral/20 uppercase">
                                                {t.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                                    <button
                                        onClick={() => openEdit(m)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 font-semibold text-sm transition-colors"
                                    >
                                        <Pencil size={14} /> Editar
                                    </button>
                                    <button
                                        onClick={() => handleDelete(m.id)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 font-semibold text-sm transition-colors"
                                    >
                                        <Trash2 size={14} /> Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-border">
                            <h2 className="text-xl font-bold text-text-primary">
                                {editingId ? 'Editar Médico' : 'Adicionar Médico'}
                            </h2>
                            <button onClick={() => setShowModal(false)} className="text-text-secondary hover:text-text-primary">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 flex flex-col gap-5">
                            {/* Foto upload */}
                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">Foto do Médico</label>
                                <div className="flex items-center gap-4">
                                    <div className="w-20 h-20 rounded-xl bg-primary/10 border-2 border-dashed border-primary/30 overflow-hidden flex items-center justify-center flex-shrink-0">
                                        {form.foto ? (
                                            <Image src={form.foto} alt="preview" width={80} height={80} className="object-cover w-full h-full" />
                                        ) : (
                                            <Upload size={24} className="text-primary/40" />
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button
                                            type="button"
                                            onClick={() => fileRef.current?.click()}
                                            className="btn-outline text-sm py-2 px-4 flex items-center gap-2"
                                            disabled={uploading}
                                        >
                                            {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
                                            {uploading ? 'Enviando...' : 'Escolher foto'}
                                        </button>
                                        <p className="text-xs text-text-secondary">JPG, PNG ou WebP. Máx. 5MB.</p>
                                        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
                                    </div>
                                </div>
                            </div>

                            {/* Campos */}
                            {[
                                { label: 'Nome completo *', key: 'nome', placeholder: 'Ex: Dra. Ana Silva' },
                                { label: 'CRM *', key: 'crm', placeholder: 'Ex: CRM 12345-SP' },
                                { label: 'Especialidade *', key: 'especialidade', placeholder: 'Ex: Pediatria' },
                                { label: 'Tags (separadas por vírgula)', key: 'tags', placeholder: 'Ex: Vacinação, Puericultura' },
                            ].map(field => (
                                <div key={field.key}>
                                    <label className="block text-sm font-semibold text-text-primary mb-2">{field.label}</label>
                                    <input
                                        type="text"
                                        className="input-field"
                                        placeholder={field.placeholder}
                                        value={(form as any)[field.key]}
                                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">Bio / Descrição</label>
                                <textarea
                                    rows={3}
                                    className="input-field resize-none"
                                    placeholder="Descreva a trajetória e especialização do médico..."
                                    value={form.bio}
                                    onChange={e => setForm(f => ({ ...f, bio: e.target.value }))}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-text-primary mb-2">Preço da Consulta (R$)</label>
                                <input
                                    type="number"
                                    className="input-field"
                                    placeholder="150"
                                    value={form.precoConsulta}
                                    onChange={e => setForm(f => ({ ...f, precoConsulta: Number(e.target.value) }))}
                                />
                            </div>

                            {feedback && (
                                <div className={`px-4 py-2 rounded-lg text-sm font-medium ${feedback.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'}`}>
                                    {feedback.msg}
                                </div>
                            )}
                        </div>

                        <div className="flex gap-3 p-6 pt-0">
                            <button onClick={() => setShowModal(false)} className="flex-1 btn-outline py-3">
                                Cancelar
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={saving || !form.nome || !form.crm || !form.especialidade}
                                className="flex-1 btn-primary py-3 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {saving ? <Loader2 size={16} className="animate-spin" /> : <Check size={16} />}
                                {saving ? 'Salvando...' : 'Salvar'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
