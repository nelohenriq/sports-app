interface ModalProps {
  hideModal: () => void;
}

export default function Modal({ hideModal }: ModalProps) {
  return (
    <div className="relative">
      {/* modal overlay */}
      <div
        className="fixed top-0 right-0 left-0 bottom-0 bg-[#000000e1] z-[20]"
        onClick={hideModal}
      ></div>
      {/* main modal */}
      <div className="fixed top-[50%] left-[50%] w-[350px] h-[250px] md:w-[500px] md:h-[300px] lg:w-[800px] lg:h-[500px] z-[21] translate-x-[-50%] translate-y-[-50%]">
        <iframe
          src="https://www.youtube.com/embed/Pir8IUxfVdU?si=ZTc9kmGQSokIzpVi"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
