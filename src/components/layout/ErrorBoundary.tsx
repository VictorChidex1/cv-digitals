import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertOctagon, RotateCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Strict React Class Component
 * Higher-Order boundary capturing all unhandled AST or Renderer exceptions inside the React Tree.
 * Prevents the application from collapsing into the default "White Screen of Death".
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    // Intercept the catastrophic failure natively and update the state to trigger the High-End Fallback UI
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the exact memory corruption trace explicitly for the Developers
    console.error('CRITICAL REACT ANOMALY LOGGED:', error, errorInfo);
  }

  private handleReboot = () => {
    // Executes a hard browser-level DOM reset, purging all corrupted React states mapping exactly to zero-state
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 font-sans overflow-hidden">
          
          {/* Subtle Volumetric Error Overlays mapping red/emerald warning signals softly across CSS blurs */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-red-900 blur-[150px] mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-emerald-900 blur-[120px] mix-blend-screen opacity-50"></div>
          </div>
          
          {/* Core Warning Terminal */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
            
            {/* Pulsing Status Core */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 mb-8 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <AlertOctagon className="h-10 w-10 text-red-500 animate-pulse" />
            </div>

            <h1 className="mb-4 text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-lg uppercase">
              SYSTEM <span className="text-red-500">ANOMALY.</span>
            </h1>

            <p className="mb-12 text-lg md:text-xl font-light text-slate-400 leading-relaxed px-4 md:px-0">
              A sub-routine failure occurred within the React matrix. Our engineering node has automatically logged the event and isolated the architecture.
            </p>

            {/* Liquid Reboot Trigger */}
            <button 
              onClick={this.handleReboot}
              className="group relative flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:shadow-[0_0_60px_rgba(16,185,129,0.4)]"
            >
              <div className="absolute inset-0 transition-transform duration-500 translate-y-full bg-gradient-to-r from-emerald-500 to-teal-400 group-hover:translate-y-0"></div>
              <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 group-hover:text-white uppercase tracking-widest">
                <RotateCcw className="h-4 w-4" />
                Reboot System
              </span>
            </button>
          </div>
        </div>
      );
    }

    // Default: Continue rendering the perfectly operating React DOM tree untouched
    return this.props.children;
  }
}
