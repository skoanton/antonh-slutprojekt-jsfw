import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <main className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <LoaderCircle className="text-secondary w-12 h-12 animate-spin" />
    </main>
  );
};

export default Spinner;
