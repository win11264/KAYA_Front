function Validate({ firstName }) {
  let errors = {};
  if (!firstName) {
    errors.firstName = "Firstname is required";
  }
  return errors;
}

export default Validate;
