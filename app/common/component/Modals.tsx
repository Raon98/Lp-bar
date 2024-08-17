import useModalStore, { ModalState } from "@/app/store/useModalStore";
import React from "react";
import BoxModal from "./modals/BoxModal";

interface SwitchProps {
  modals: { [key: string]: React.ComponentType<any> };
  options?: { [key: string]: any };
}

const modals: { [key: string]: React.ComponentType<any> } = {
  box: BoxModal,
};

const Switch = ({ modals, options }: SwitchProps) => {
  const modalList = useModalStore((state) => state.modalList());

  const openModals = Object.keys(modalList).find((key: string) => {
    return modalList[key as keyof ModalState];
  });
  const ModalComponent = openModals ? modals[openModals] : null;

  return ModalComponent ? <ModalComponent {...options} /> : null;
};

export const Modals = ({ modalOptions }: any) => {
  return (
    <>
      <Switch modals={modals} options={modalOptions} />
    </>
  );
};
