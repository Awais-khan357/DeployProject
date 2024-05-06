import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup
  .object({
    fname: yup
      .string()
      .required("Missing first Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    lname: yup
      .string()
      .required("Missing last Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    fathername: yup
      .string()
      .required("Missing father Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    department: yup
      .string()
      .required("Missing department Name")
      .matches(/^[^0-9][a-zA-Z0-9\s]*$/, "String Type Invalid"),
    semester: yup.string().required("Missing semester"),
    RAddress: yup.string().required("Missing Residential address"),
    PAddress: yup.string().required("Missing Permanent address"),
    email: yup
      .string()
      .required("Missing Email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid Email Format"
      ),
    phone: yup
      .string()
      .required("Missing Phone No")
      .matches(/^\d+$/, "Invalid Phone No"),
    dateFrom: yup.string().required("Missing Date"),
    dateTo: yup.string().required("Missing Date"),
  })
  .required();

const Input = ({ placeholder, register, errors, label, format }) => {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="text" placeholder={placeholder} />
        {errors && <span className="text-danger">{errors.message}</span>}
        <Form.Text muted>{format}</Form.Text>
      </Form.Group>
    </Col>
  );
};

const AddressInput = ({ placeholder, register, errors, label }) => {
  return (
    <Col sm={12} lg={12} md={12}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="text" placeholder={placeholder} />
        {errors && <span className="text-danger">{errors.message}</span>}
      </Form.Group>
    </Col>
  );
};
function FormDate({ register, errors, label }) {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-md">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="date" />
        {errors && <span className="text-danger">{errors.message}</span>}
      </Form.Group>
    </Col>
  );
}

export default function MemberShipForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      fname: "",
      lname: "",
      fathername: "",
      department: "",
      semester: "",
      PAddress: "",
      RAddress: "",
      email: "",
      phone: "",
      dateFrom: "",
      dateTo: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <h4 style={{ marginTop: "19px", marginBottom: "58px" }}>
        New Student Membership Form
      </h4>
      <h5 style={{ marginBottom: "60px" }}>Student Details:</h5>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-2">
          <Input
            label="First Name *"
            register={() => register("fname")}
            errors={errors.fname}
          />
          <Input
            label="Last Name *"
            register={() => register("lname")}
            errors={errors.lastname}
          />
          <Input
            label="Father Name *"
            register={() => register("fathername")}
            errors={errors.fathername}
          />
          <Input
            label="Department Name *"
            register={() => register("department")}
            errors={errors.department}
          />
          <Input
            label="Semester *"
            register={() => register("semester")}
            errors={errors.semester}
          />
          <Input
            label="Email *"
            register={() => register("email")}
            errors={errors.email}
            format="example@gmail.com"
          />
          <Input
            label="Phone *"
            register={() => register("phone")}
            errors={errors.phone}
            format="0000-1234567"
          />
          <AddressInput
            label="Residential Adress *"
            register={() => register("RAddress")}
            errors={errors.RAddress}
          />
          <AddressInput
            label="Permanent Address *"
            register={() => register("PAddress")}
            errors={errors.PAddress}
          />
          <FormDate
            register={() => register("dateFrom")}
            errors={errors.dateFrom}
            label="Session From"
            format="MM/DD/YYYY"
          />
          <FormDate
            register={() => register("dateTo")}
            errors={errors.dateTo}
            label="To"
            format="MM/DD/YYYY"
          />
        </Row>
        <Row className="justify-content-center mt-3">
          <Col md={3}>
            <button
              className="btn form-control"
              style={{
                color: "#fff",
                borderColor: "#0a1551",
                backgroundColor: "#0a1551",
              }}
              type="submit"
            >
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </>
  );
}
