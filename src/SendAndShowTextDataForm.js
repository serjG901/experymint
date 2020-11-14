import React from "react";
import SendAndShowTextDataFormLabel from "./SendAndShowTextDataFormLabel.js";
import SendAndShowTextDataFormSubmit from "./SendAndShowTextDataFormSubmit.js";
import SendAndShowTextDataFormText from "./SendAndShowTextDataFormText.js";
import SendAndShowTextDataFormInput from "./SendAndShowTextDataFormInput.js";

export default function SendAndShowTextDataForm({
  onSubmit,
  statusInput,
  setStatusInput,
  typeTextData,
  userData
}) {
  return (
    <form
      className={` 
      px-2 
      pt-2 
      pb-2 
      mb-2
      `}
      onSubmit={onSubmit}
    >
      <SendAndShowTextDataFormLabel
        typeTextData={typeTextData}
        statusInput={statusInput}
        setStatusInput={setStatusInput}
      >
        <SendAndShowTextDataFormText
          statusInput={statusInput}
          userData={userData}
          typeTextData={typeTextData}
        />
      </SendAndShowTextDataFormLabel>
      {statusInput ? (
        <>
          <SendAndShowTextDataFormInput typeTextData={typeTextData} />
          <SendAndShowTextDataFormSubmit>Send</SendAndShowTextDataFormSubmit>
        </>
      ) : (
        <></>
      )}
    </form>
  );
}
