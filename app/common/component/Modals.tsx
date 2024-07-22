import React from "react";
import BoxModal from "./modals/BoxModal";
import useModalStore, { ModalState } from "@/app/store/useModalStore";

interface SwitchProps {
  modals: { [key: string]: JSX.Element };
}

const modals: { [key: string]: JSX.Element } = {
  box: <BoxModal />,
};

const Switch = ({ modals }: SwitchProps) => {
  const modalList = useModalStore((state) => state.modalList()); 

  const openModals = Object.keys(modalList).find((key: string) => {
    return modalList[key as keyof ModalState];
  });
  return openModals ? modals[openModals] : null;
};

export const Modals = () => {
  return (
    <>
      <Switch modals={modals} />
    </>
  );
};

