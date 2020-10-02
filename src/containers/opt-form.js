import React from "react";

import { OptForm } from "../components";

export function OptFormContainer() {
  return (
    <>
    <OptForm.Container>
       <OptForm>
         <OptForm.Input placeholder="Email Address" />
         <OptForm.Button>Try It Now</OptForm.Button>
         <OptForm.Break />
         <OptForm.Text>Ready to watch enter you email or restart your membership</OptForm.Text>
       </OptForm>
     </OptForm.Container>
    </>
  );
}
