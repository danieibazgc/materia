import { useState } from "react";
import { requests } from "@/data/requests";
import RequestRow from "@/components/ui/RequestRow";
import Modal from "@/components/ui/Modal";
import RequestForm from "@/features/requests/components/RequestForm";

interface RequestBoardProps {
  onShowToast: (message: string) => void;
}

const RequestBoard = ({ onShowToast }: RequestBoardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="tablero"
      className="py-24 px-4 md:px-10 max-w-[1440px] mx-auto"
      aria-labelledby="request-board-title"
    >
      <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-4">
        <div>
          <h2
            id="request-board-title"
            className="text-3xl font-medium text-gray-900 tracking-tight"
          >
            Tablero de búsqueda activa
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Requerimientos abiertos de marcas buscando materiales sostenibles.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="text-sm font-medium text-brand hover:underline hidden md:inline"
        >
          Publicar solicitud →
        </button>
      </div>
      <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
        <div className="divide-y divide-gray-100">
          {requests.map((request) => (
            <RequestRow key={request.id} request={request} />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Publicar solicitud de material"
        maxWidth="md"
      >
        <RequestForm
          onSuccess={() => setIsModalOpen(false)}
          onShowToast={onShowToast}
        />
      </Modal>
    </section>
  );
};

export default RequestBoard;
