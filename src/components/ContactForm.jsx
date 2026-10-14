import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send, X } from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
  "19dc2270-5036-4ecc-ab84-41ddc912e0c1";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errorTimer = useRef(null);

  useEffect(() => {
    return () => {
      if (errorTimer.current) window.clearTimeout(errorTimer.current);
    };
  }, []);

  const errors = useMemo(() => {
    const currentErrors = {};

    if (!values.name.trim()) {
      currentErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      currentErrors.email = "Email is required.";
    } else if (!isValidEmail(values.email)) {
      currentErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      currentErrors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      currentErrors.message = "Message must be at least 10 characters.";
    }

    return currentErrors;
  }, [values]);

  const hasErrors = Object.keys(errors).length > 0;

  const setField = (field, value) => {
    setValues((previousValues) => ({
      ...previousValues,
      [field]: value,
    }));
  };

  const markTouched = (field) => {
    setTouched((previousTouched) => ({
      ...previousTouched,
      [field]: true,
    }));
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dismissError = () => {
    if (errorTimer.current) {
      window.clearTimeout(errorTimer.current);
      errorTimer.current = null;
    }
    setErrorMessage(null);
  };

  const showError = (msg = "Something went wrong. Please try again in a moment.") => {
    if (errorTimer.current) {
      window.clearTimeout(errorTimer.current);
    }
    setErrorMessage(msg);
    errorTimer.current = window.setTimeout(() => {
      setErrorMessage(null);
      errorTimer.current = null;
    }, 5000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (hasErrors || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      formData.set("access_key", WEB3FORMS_ACCESS_KEY);
      formData.set("subject", "New Contact Message for Fathima Asma");
      formData.set("from_name", "Fathima Asma Portfolio");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        event.target.reset();

        setValues({
          name: "",
          email: "",
          message: "",
        });

        setTouched({
          name: false,
          email: false,
          message: false,
        });

        setShowSuccessModal(true);
      } else {
        showError("Something went wrong. Please try again in a moment.");
      }
    } catch {
      showError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-3xl border border-(--border-subtle) bg-(--surface) p-6 sm:p-8 shadow-xs">
      <h3 className="text-xl font-bold tracking-tight text-(--text)">
        Send a Message
      </h3>

      <p className="mt-2 text-sm text-(--text-secondary)">
        Have an internship opportunity or want to connect? Fill out the form and it will be delivered directly to my inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-4"
        noValidate
      >
        {/* Name */}
        <div>
          <label className="form-label" htmlFor="name">
            Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            onBlur={() => markTouched("name")}
            className={
              touched.name && errors.name
                ? "form-input form-error"
                : "form-input"
            }
            placeholder="Your name"
            autoComplete="name"
            aria-required="true"
            aria-invalid={touched.name && Boolean(errors.name)}
            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.name && errors.name && (
            <p id="name-error" className="form-help" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="form-label" htmlFor="email">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            onBlur={() => markTouched("email")}
            className={
              touched.email && errors.email
                ? "form-input form-error"
                : "form-input"
            }
            placeholder="you@example.com"
            autoComplete="email"
            aria-required="true"
            aria-invalid={touched.email && Boolean(errors.email)}
            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.email && errors.email && (
            <p id="email-error" className="form-help" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="form-label" htmlFor="message">
            Message <span className="text-red-500" aria-hidden="true">*</span>
          </label>

          <textarea
            id="message"
            name="message"
            required
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
            onBlur={() => markTouched("message")}
            className={
              touched.message && errors.message
                ? "form-textarea form-error"
                : "form-textarea"
            }
            placeholder="Tell me about your project or opportunity…"
            rows={5}
            aria-required="true"
            aria-invalid={touched.message && Boolean(errors.message)}
            aria-describedby={touched.message && errors.message ? "message-error" : undefined}
            disabled={isSubmitting}
          />

          {touched.message && errors.message && (
            <p id="message-error" className="form-help" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        {/* Spam protection (Honeypot) */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      {/* Centered Success Modal matching portfolio theme */}
      <AnimatePresence>
        {showSuccessModal && (
          <Motion.div
            key="modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleCloseSuccess}
            className="fixed inset-0 z-80 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          >
            <Motion.div
              key="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="success-modal-title"
              aria-describedby="success-modal-desc"
              initial={{ scale: 0.92, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-(--border) bg-(--bg) p-6 sm:p-8 shadow-2xl text-center"
            >
              {/* Top-right close button */}
              <button
                type="button"
                onClick={handleCloseSuccess}
                className="absolute right-4 top-4 rounded-xl p-2 text-muted transition-colors hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/10"
                aria-label="Close success message"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Theme-aligned Checkmark Badge */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5 mb-5 dark:bg-emerald-500/20 dark:text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3
                id="success-modal-title"
                className="text-xl sm:text-2xl font-extrabold tracking-tight text-(--text)"
              >
                Message Sent Successfully!
              </h3>

              {/* Subtitle */}
              <p
                id="success-modal-desc"
                className="mt-2.5 text-sm text-muted leading-relaxed"
              >
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleCloseSuccess}
                  className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5"
                >
                  <span>Got it, thank you!</span>
                </button>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Floating Error Toast */}
      <AnimatePresence>
        {errorMessage && (
          <Motion.div
            role="alert"
            aria-live="assertive"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-6 left-4 right-4 z-70 mx-auto flex max-w-md items-start gap-3.5 rounded-2xl border border-red-500/20 bg-(--bg) backdrop-blur-xl p-4 shadow-xl sm:left-auto sm:right-6 sm:mx-0 sm:w-96"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-500 dark:bg-red-500/20 dark:text-red-400">
              <AlertCircle className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-sm font-bold tracking-tight text-(--text)">
                Message Could Not Be Sent
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {errorMessage}
              </p>
            </div>

            <button
              type="button"
              onClick={dismissError}
              className="shrink-0 rounded-lg p-1 text-muted transition-colors hover:bg-black/5 hover:text-(--text) dark:hover:bg-white/10"
              aria-label="Close error notification"
            >
              <X className="h-4 w-4" />
            </button>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
