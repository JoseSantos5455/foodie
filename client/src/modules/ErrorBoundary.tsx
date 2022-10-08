import { Component, ErrorInfo, ReactNode } from 'react';
import errorImg from '@/assets/error.svg';
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <section className="py-6 bg-white min-h-screen flex items-center justify-center">
          <div className="flex flex-col text-center space-y-4">
            <img className="w-96 h-auto" src={errorImg} alt="empty order" />
            <p className="text-secondary text-3xl font-bold text-gray-700">
              Woops! <br /> Something went wrong.
            </p>

            <span className="text-gray-600 items-center">Have you tried turning it on and off again ?.</span>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
