import { useState } from "react";
import ExtraInformation from "../../components/forms/receipt/sections/ExtraInformation";
import ReciptInformation from "../../components/forms/receipt/sections/ReciptInformation";
import UserInformation from "../../components/forms/receipt/sections/UserInformation";
import {
  IUserData,
  IReceiptData,
  IExtraInformationData,
} from "../../components/forms/receipt/state";
import Layout from "../../components/Layout/index";

export default function ReciptForm() {
  const [step, setStep] = useState<0 | 1 | 2>(0); //TODO: Add "enum" for steps, remove use of magic numbers.
  const [userFormData, setUserFormData] = useState<IUserData>();
  const [receciptInformationData, setRececiptInformationData] =
    useState<IReceiptData>();

  const changeStep = (delta) => {
    setStep(step + delta);
  };

  const submitForm = (extraInformationData: IExtraInformationData) => {
    const formData = {
      ...userFormData,
      ...receciptInformationData,
      ...extraInformationData,
    };
    console.log("Receipt form submitted");
    console.log(formData);
  };

  return (
    <Layout title="Kvittering">
      <div className="max-w-lg w-full text-center text-online-blue-500">
        <h1 className="text-4xl">Kvitteringsskjema</h1>
        {step === 0 && (
          <UserInformation
            changeStep={changeStep}
            setFormData={setUserFormData}
          />
        )}
        {step === 1 && (
          <ReciptInformation
            changeStep={changeStep}
            setFormData={setRececiptInformationData}
          />
        )}
        {step === 2 && (
          <ExtraInformation
            changeStep={changeStep}
            submitReceiptForm={submitForm}
          />
        )}
      </div>
    </Layout>
  );
}
