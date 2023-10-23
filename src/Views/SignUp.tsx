import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Field, Form, FormSpy } from "react-final-form";
import Typography from "./modules/components/Typography";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
import { email, required } from "./modules/form/validation";
import RFTextField from "./modules/form/RFTextField";
import FormButton from "./modules/form/FormButton";
import FormFeedback from "./modules/form/FormFeedback";
import withRoot from "./modules/withRoot";
import supabase from "../supabase/supabase";
import { UserContext } from "../controllers/contexts";

function SignUp() {
  const [sent, setSent] = React.useState(false);
  const user = React.useContext(UserContext);

  const validate = (values: { [index: string]: string }) => {
    const errors = required(
      [
        "email",
        "password",
        "fullLegalName",
        "phone",
        "address",
        "city",
        "state",
        "zipCode",
        "country",
        "ssn",
      ],
      values
    );

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = async (input: {
    address: string;
    city: string;
    country: string;
    email: string;
    fullLegalName: string;
    password: string;
    phone: string;
    ssn: string;
    state: string;
    zipCode: string;
  }) => {
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
    });

    if (error) {
      alert(error);
      return;
    }

    if (!data.user) {
      alert("Issue fetching user");
      return;
    }

    if (!data.user.email) {
      alert("Issue assigning email");
      return;
    }

    user.setUser(
      data.user.id,
      "",
      data.user.email,
      input.phone,
      {
        street: input.address,
        city: input.city,
        state: input.state,
        zipCode: input.zipCode,
        country: input.country,
      },
      "",
      0,
      0
    );

    await supabase.from("userProfile").insert({
      userId: data.user.id,
      phone: input.phone,
      street: input.address,
      city: input.city,
      state: input.state,
      zipCode: input.zipCode,
      country: input.country,
      ssn: input.ssn,
      bankInfo: "",
      cashBalance: 0,
      sharesBalance: 0,
    });

    alert("Please confirm email to create account");
    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component="form"
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="new-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <Field
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="given-name"
                fullWidth
                label="Full Legal Name"
                name="fullLegalName"
                required
              />
              <Field
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="phone"
                fullWidth
                label="Phone Number"
                name="phone"
                required
              />
              <Field
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="address"
                fullWidth
                label="Street Address"
                name="address"
                required
              />
              <Field
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="city"
                fullWidth
                label="City"
                name="city"
                required
              />
              <Field
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="state"
                fullWidth
                label="State"
                name="state"
                required
              />
              <Field
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="zip-code"
                fullWidth
                label="Zip Code"
                name="zipCode"
                required
              />
              <Field
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="country"
                fullWidth
                label="Country"
                name="country"
                required
              />
              <Field
                component={RFTextField}
                disabled={submitting || sent}
                autoComplete="ssn"
                fullWidth
                label="SSN"
                name="ssn"
                required
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                color="secondary"
                fullWidth
              >
                {submitting || sent ? "In progress…" : "Sign Up"}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
