import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import ConcivaLogo from '../components/common/ConcivaLogo';
import '../styles/login.css';

/* ── Configuration ─────────────────────────────────────── */
// Point this at your real auth endpoint — e.g. process.env.VITE_LOGIN_URL

const LEFT_FEATURES = [
  'AI voice bot answers calls 24 / 7',
  '190+ countries, local & toll-free numbers',
  'Real-time sentiment analytics dashboard',
  'SOC 2 Type II · HIPAA · GDPR compliant',
];

const LEFT_STATS = [
  { val: '2.4B+', label: 'Minutes / Month' },
  { val: '99.99%', label: 'Uptime SLA' },
  { val: '14 K+', label: 'Businesses' },
];

/* ── Component ─────────────────────────────────────────── */
export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    /* Basic client-side validation */
    if (!form.email.trim()) { setError('Please enter your email address.'); return; }
    if (!form.password) { setError('Please enter your password.'); return; }

    setLoading(true);

    try {
      /* ── Redirect strategy ────────────────────────────────────────────────
         Build a redirect_uri so the external portal can send the user back
         after a successful login (if it supports OAuth-style redirect).
         If you control the backend, swap this for a fetch() POST instead.
      ──────────────────────────────────────────────────────────────────── */
      const params = new URLSearchParams({
        email: form.email,
        redirect_uri: `${window.location.origin}/`,
      });

      // Hard redirect to the login endpoint with prefilled params
      window.location.href = `${LOGIN_ENDPOINT}?${params.toString()}`;

      /* ── Alternative: POST to your own API ─────────────────────────────
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Invalid email or password.');
      }

      const { token } = await res.json();
      localStorage.setItem('auth_token', token);
      navigate('/');
      ──────────────────────────────────────────────────────────────────── */

    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    /* Login page uses its own full-page layout — no Navbar/Footer wrapper */
    <div className="login-page">

      {/* ── LEFT PANEL ── */}
      <div className="login-left">
        {/* Decorative elements */}
        <div className="lp-grid" aria-hidden="true" />
        <div className="lp-blob lp-blob-1" aria-hidden="true" />
        <div className="lp-blob lp-blob-2" aria-hidden="true" />
        <div className="lp-blob lp-blob-3" aria-hidden="true" />

        {/* Brand */}
        <Link to="/" className="lp-brand">
          <ConcivaLogo iconSize={36} textColor="#FFFFFF" />
        </Link>

        {/* Center copy */}
        <div className="lp-center">
          <h2 className="lp-headline">
            Your AI voice team,<br />
            <span className="lp-hl">ready to take calls.</span>
          </h2>
          <p className="lp-desc">
            Sign in to manage your AI agents, phone numbers, call analytics,
            and billing — all from one powerful workspace.
          </p>

          <ul className="lp-feature-list" aria-label="Platform highlights">
            {LEFT_FEATURES.map(f => (
              <li key={f} className="lp-feature-item">
                <span className="lp-feature-check" aria-hidden="true">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom stats */}
        <div className="lp-stats">
          {LEFT_STATS.map(s => (
            <div key={s.label} className="lp-stat">
              <span className="lp-stat-val">{s.val}</span>
              <span className="lp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL (Form) ── */}
      <div className="login-right">
        <div className="login-form-card">

          <div className="lf-eyebrow">
            <Sparkles size={13} /> Secure Sign In
          </div>
          <h1 className="lf-title">Welcome back</h1>
          <p className="lf-sub">
            Don't have an account?{' '}
            <Link to="/pricing">Start your free trial</Link>
          </p>

          <form className="lf-form" onSubmit={handleSubmit} noValidate>

            {/* Error banner */}
            {error && (
              <div className="lf-error" role="alert">
                <AlertCircle size={15} />
                {error}
              </div>
            )}

            {/* Email */}
            <div className="lf-field">
              <label className="lf-label" htmlFor="login-email">
                Email address
              </label>
              <div className="lf-input-wrap">
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="lf-input"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <span className="lf-input-icon">
                  <Mail size={16} />
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="lf-field">
              <label className="lf-label" htmlFor="login-password">
                Password
              </label>
              <div className="lf-input-wrap">
                <input
                  id="login-password"
                  type={showPw ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="lf-input"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  required
                />
                <span className="lf-input-icon">
                  <Lock size={16} />
                </span>
                <button
                  type="button"
                  className="lf-pw-toggle"
                  onClick={() => setShowPw(p => !p)}
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
                >
                  {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Row: remember + forgot */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label className="lf-check-row">
                <input
                  type="checkbox"
                  name="remember"
                  id="login-remember"
                  className="lf-checkbox"
                  checked={form.remember}
                  onChange={handleChange}
                />
                <span className="lf-check-label">Remember me</span>
              </label>
              <a href={`${LOGIN_ENDPOINT}?action=forgot`} className="lf-forgot-link">
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="btn-login"
              className="btn-login-submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="lf-spinner" />
                  Signing in…
                </>
              ) : (
                <>
                  Sign In <ArrowRight size={17} strokeWidth={2.5} />
                </>
              )}
            </button>

            {/* Divider */}
            <div className="lf-divider" aria-hidden="true">
              <span className="lf-divider-line" />
              <span className="lf-divider-text">or continue with</span>
              <span className="lf-divider-line" />
            </div>

            {/* SSO */}
            <button
              type="button"
              className="btn-login-sso"
              onClick={() => {
                window.location.href = `${LOGIN_ENDPOINT}?provider=google`;
              }}
            >
              {/* Google icon */}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
                <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05" />
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
              </svg>
              Sign in with Google
            </button>

          </form>

          {/* Fine print */}
          <p className="lf-footer-note">
            By signing in you agree to our{' '}
            <a href="/terms">Terms of Service</a> and{' '}
            <a href="/privacy">Privacy Policy</a>.
            <br />
            Need help?{' '}
            <Link to="/contact">Contact support</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
