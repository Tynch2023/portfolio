import { memo, useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Smartphone, Tablet, Monitor, Loader2 } from "lucide-react";

const deviceWidths: Record<string, string> = {
  mobile: "375px",
  tablet: "768px",
  desktop: "100%",
};

const deviceButtons = [
  { id: "mobile", Icon: Smartphone, label: "Mobile View" },
  { id: "tablet", Icon: Tablet, label: "Tablet View" },
  { id: "desktop", Icon: Monitor, label: "Desktop View" },
];

interface DeviceButtonProps {
  id: string;
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const DeviceButton = memo(({ id, Icon, label, isActive, onClick }: DeviceButtonProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      disabled={isActive}
      className={`p-3 rounded-lg transition-all duration-300 ease-out ${
        isActive
          ? "bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-600 text-white shadow-xl shadow-blue-500/60 ring-2 ring-blue-400/50 cursor-not-allowed"
          : "bg-slate-700/40 text-slate-300 hover:bg-slate-700/70 hover:text-white hover:scale-105 border border-transparent hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/20"
      }`}
      aria-label={label}
    >
      <Icon size={20} />
    </button>
  );
});

DeviceButton.displayName = "DeviceButton";

interface ResponsiveViewerProps {
  displayUrl?: string;
}

const ResponsiveViewer = ({ displayUrl }: ResponsiveViewerProps) => {
  const { url } = useParams<{ url?: string }>();
  const [device, setDevice] = useState("desktop");
  const [isLoading, setIsLoading] = useState(true);

  // Decodificar la URL desde los parámetros o usar la prop/default
  const finalUrl = url 
    ? decodeURIComponent(url) 
    : displayUrl || "https://eloy-portf.netlify.app/";

  useEffect(() => {
    setIsLoading(true);
  }, [finalUrl]);

  const handleDeviceChange = useCallback((newDevice: string) => {
    setDevice(newDevice);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 sm:p-6 md:p-8">
      <div className="flex flex-col gap-6 p-6 sm:p-8 rounded-lg bg-gradient-to-br from-slate-900/90 via-blue-900/90 to-slate-900/90 shadow-2xl backdrop-blur-sm max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Responsive Design Tester{" "}
            <span className="text-slate-300 capitalize">: {device}</span>
          </h1>
          <div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded-lg border border-blue-800/30 backdrop-blur-md gap-2">
            {deviceButtons.map((button) => (
              <DeviceButton
                key={button.id}
                {...button}
                isActive={device === button.id}
                onClick={handleDeviceChange}
              />
            ))}
          </div>
        </header>

        <div className="grow flex justify-center items-center bg-gradient-to-br from-slate-900/90 to-blue-950/90 rounded-md shadow-inner backdrop-blur-sm p-4">
          <div
            className="relative bg-white rounded-md shadow-2xl overflow-hidden transition-all duration-300 ease-out border-4 border-slate-200"
            style={{
              width: deviceWidths[device],
              height: "70vh",
              maxHeight: "70vh",
            }}
          >
            {finalUrl && (
              <>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white z-10 rounded-md">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 className="text-blue-600 animate-spin" size={40} />
                      <p className="text-slate-600 font-medium">Loading...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={finalUrl}
                  title="Responsive Viewer"
                  className="w-full h-full border-0"
                  loading="lazy"
                  onLoad={handleIframeLoad}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ResponsiveViewer);

