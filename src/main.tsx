import * as React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./app";
import "./index.css";

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean, error: Error | null}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'white', background: 'red', padding: '20px', fontSize: '20px' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error?.toString()}</pre>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootEl = document.getElementById("root");

ReactDOM.createRoot(rootEl!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Toaster theme="dark" richColors closeButton toastOptions={{ style: { background: "#050816", opacity: 0.95 } }} />
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
