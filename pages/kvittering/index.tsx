import { useState } from "react";
import ExtraInformation from "../../components/forms/receipt/ExtraInformation";
import ReciptInformation from "../../components/forms/receipt/ReciptInformation";
import UserSection from "../../components/forms/receipt/UserSection";
import Layout from "../../components/Layout/index";

export default function ReciptForm() {
  const [step, setStep] = useState<0 | 1 | 2>(0); //TODO: Add "enum" for steps, remove use of magic numbers.

  const changeStep = (delta) => {
    setStep(step + delta);
  };

  const submitForm = () => {
    console.log("Submitting form");
  };

  return (
    <Layout title="Kvittering">
      <div className="max-w-lg w-full text-center">
        <h1 className="text-4xl">Kvitteringsskjema</h1>
        {step === 0 && <UserSection changeStep={changeStep} />}
        {step === 1 && <ReciptInformation changeStep={changeStep} />}
        {step === 2 && <ExtraInformation changeStep={changeStep} />}
      </div>
    </Layout>
  );
}
