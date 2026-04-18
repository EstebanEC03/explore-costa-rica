import { useState, useEffect } from 'react';
import AdminSidebar from '../components/layout/AdminSidebar';
import { useUsers } from '../hooks/useUsers';
import { usersService } from '../services/usersService';
import type { User } from '../types/user';

const PAGE_SIZE = 10;

function formatDate(isoDate?: string): string {
  if (!isoDate) return '—';
  try {
    return new Date(isoDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch {
    return '—';
  }
}

export default function ManageUsers() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [role, setRole] = useState<'user' | 'admin' | ''>('');
  const [page, setPage] = useState(1);

  // Modal state
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', role: 'user' as 'user' | 'admin' });
  const [savingEdit, setSavingEdit] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  // Debounce de búsqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const { users, total, totalPages, loading, error, refetch } = useUsers({
    page,
    pageSize: PAGE_SIZE,
    search: debouncedSearch || undefined,
    role: role || undefined,
  });

  const handleDelete = async (user: User) => {
    if (!confirm(`Are you sure you want to delete "${user.name}"? This action cannot be undone.`)) return;

    try {
      await usersService.deleteUser(user.id);
      refetch();
    } catch (err) {
      alert('Failed to delete user. Please try again.');
      console.error(err);
    }
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setEditForm({ name: user.name, email: user.email, role: user.role });
    setEditError(null);
  };

  const closeEditModal = () => {
    setEditingUser(null);
    setEditError(null);
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;

    if (!editForm.name.trim()) {
      setEditError('Name is required.');
      return;
    }
    if (!editForm.email.trim() || !/\S+@\S+\.\S+/.test(editForm.email)) {
      setEditError('A valid email is required.');
      return;
    }

    setSavingEdit(true);
    setEditError(null);
    try {
      await usersService.updateUser(editingUser.id, {
        name: editForm.name.trim(),
        email: editForm.email.trim(),
        role: editForm.role,
      });
      closeEditModal();
      refetch();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update user.';
      setEditError(message);
    } finally {
      setSavingEdit(false);
    }
  };

  const clearFilters = () => {
    setSearch('');
    setRole('');
    setPage(1);
  };

  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar />
      <main className="ml-64 p-12 min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <nav className="flex text-xs text-on-surface-variant gap-2 mb-2 uppercase tracking-widest font-semibold">
              <span>Admin</span>
              <span>/</span>
              <span className="text-primary">Customer CRM</span>
            </nav>
            <h1 className="text-4xl font-extrabold tracking-tight text-primary font-headline">Manage Users</h1>
            <p className="text-on-surface-variant mt-2">Oversee all travelers and admins with curator care.</p>
          </div>
        </header>

        {/* Filters */}
        <section className="grid grid-cols-12 gap-6 mb-8">
          <div className="col-span-8 bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] flex items-center gap-6">
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
              <input
                className="w-full bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="Search users by name or email..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Role</label>
              <select
                className="bg-surface-container-high border-none rounded-lg text-xs font-medium py-2 px-3 focus:ring-2 focus:ring-primary/20"
                value={role}
                onChange={(e) => { setRole(e.target.value as 'user' | 'admin' | ''); setPage(1); }}
              >
                <option value="">All Roles</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              onClick={clearFilters}
              className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-semibold text-xs hover:bg-secondary-container/80 transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="col-span-4 bg-tertiary-container p-6 rounded-xl shadow-sm flex items-center justify-between">
            <div>
              <p className="text-tertiary-fixed-dim text-xs font-bold uppercase tracking-widest mb-1">Registered Users</p>
              <h3 className="text-2xl font-black text-on-tertiary-container">{total}</h3>
            </div>
            <div className="relative flex items-center justify-center w-12 h-12">
              <span className="material-symbols-outlined text-tertiary-fixed text-3xl">group</span>
            </div>
          </div>
        </section>

        {/* Loading */}
        {loading && (
          <div className="py-20 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
            <p className="text-on-surface-variant font-medium">Loading users...</p>
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <div className="py-16 bg-error-container/20 rounded-2xl text-center">
            <span className="material-symbols-outlined text-6xl text-error mb-4">error</span>
            <p className="text-on-surface-variant">{error}</p>
          </div>
        )}

        {/* Table */}
        {!loading && !error && (
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low text-on-surface-variant text-xs font-bold uppercase tracking-widest border-b border-outline-variant/10">
                <tr>
                  <th className="px-8 py-5">User</th>
                  <th className="px-6 py-5">Email</th>
                  <th className="px-6 py-5 text-center">Role</th>
                  <th className="px-6 py-5">Joined</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-surface-bright transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        {user.avatar ? (
                          <img className="w-10 h-10 rounded-full object-cover shadow-sm" src={user.avatar} alt={user.name} />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-on-surface group-hover:text-primary transition-colors">{user.name}</div>
                          <div className="text-xs text-on-surface-variant font-mono">{user.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-on-surface-variant text-sm">{user.email}</td>
                    <td className="px-6 py-6 text-center">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        user.role === 'admin'
                          ? 'bg-primary-container text-on-primary-container'
                          : 'bg-surface-container-high text-on-surface-variant'
                      }`}>
                        <span className="material-symbols-outlined text-sm">
                          {user.role === 'admin' ? 'shield_person' : 'person'}
                        </span>
                        {user.role === 'admin' ? 'Admin' : 'User'}
                      </span>
                    </td>
                    <td className="px-6 py-6 text-on-surface-variant text-sm">{formatDate(user.createdAt)}</td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openEditModal(user)}
                          className="p-2 hover:bg-surface-container-highest rounded-lg text-secondary transition-colors"
                          title="Edit"
                        >
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(user)}
                          className="p-2 hover:bg-error-container/20 rounded-lg text-error transition-colors"
                          title="Delete"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {users.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-16 text-on-surface-variant">
                      No users found. Try adjusting your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="px-8 py-4 bg-surface-container-low flex justify-between items-center text-xs font-medium text-on-surface-variant">
                <div>Showing <span className="font-bold text-on-surface">{users.length}</span> of {total} users</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest disabled:opacity-50 transition-colors"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`px-3 py-1.5 rounded border border-outline-variant transition-colors ${
                        p === page ? 'bg-primary text-on-primary font-bold' : 'hover:bg-surface-container-highest'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container-highest disabled:opacity-50 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Edit Modal */}
        {editingUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={closeEditModal}>
            <div className="bg-surface-container-lowest rounded-2xl shadow-2xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary font-headline">Edit User</h2>
                <button onClick={closeEditModal} className="p-2 rounded-full hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form className="space-y-5" onSubmit={handleSaveEdit} noValidate>
                {editError && (
                  <div className="bg-error-container/40 rounded-lg p-3 flex items-start gap-2 border border-error/10" role="alert">
                    <span className="material-symbols-outlined text-error text-lg">error</span>
                    <p className="text-on-error-container text-xs font-medium">{editError}</p>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="edit_name">Name</label>
                  <input
                    id="edit_name"
                    type="text"
                    className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-60"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    disabled={savingEdit}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="edit_email">Email</label>
                  <input
                    id="edit_email"
                    type="email"
                    className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-60"
                    value={editForm.email}
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    disabled={savingEdit}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant" htmlFor="edit_role">Role</label>
                  <select
                    id="edit_role"
                    className="w-full bg-surface-container-high border-none rounded-lg px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all disabled:opacity-60"
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value as 'user' | 'admin' })}
                    disabled={savingEdit}
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeEditModal}
                    disabled={savingEdit}
                    className="flex-1 py-3 rounded-full bg-surface-container-high text-on-surface font-semibold hover:bg-surface-container-highest transition-colors disabled:opacity-60"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingEdit}
                    className="flex-1 py-3 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {savingEdit ? (
                      <>
                        <div className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                        Saving...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
