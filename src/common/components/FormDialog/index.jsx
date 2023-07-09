import { AlternateEmail, Key, Phone } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import FormField from "../Form";

const FormDialog = ({onSubmit}) => {
    const [values,setValues]=useState({})
  return (
    <Dialog open={true}>
      <DialogTitle>Primary contact</DialogTitle>
      <DialogContent>
        <FormField
          values={values}
          setValues={setValues}
          onSubmit={() => {
            onSubmit()
          }}
          inputs={{
            email: {
              label: "Email",
              regEx: /.com/,
              type: "text",
              startIcon: AlternateEmail,
              helperText: "Invalid email",
            },
            phone: {
                label: "Phone",
                regEx: /\d{10}/,
                type: "text",
                startIcon: Phone,
                helperText: "Invalid Phone number",
              },
            password: {
              label: "Password",
              type: "password",
              startIcon: Key,
              regEx: /.{6,}/,
              helperText: "Invalid password",
            },
          }}
        />
      </DialogContent>
      {/* <DialogActions>
        <Button>Save Changes</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default FormDialog;
