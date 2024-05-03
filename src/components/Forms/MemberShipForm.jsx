import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Heading from "../AboutLinks/Heading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup
  .object({
    name: yup
      .string()
      .required("Missing Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    Fname: yup
      .string()
      .required("Missing Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    department: yup
      .string()
      .required("Missing department Name")
      .matches(/^[^0-9][a-zA-Z0-9]*$/, "String Type Invalid"),
    semester: yup.string().required("Missing semester"),
    address: yup.string().required("Missing address"),
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
    date: yup.string().required("Missing Date"),
  })
  .required();

const Input = ({ placeholder, register, errors }) => {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Control {...register()} type="text" placeholder={placeholder} />
        {errors && <span className="text-danger">{errors.message}</span>}
      </Form.Group>
    </Col>
  );
};

function FormDate({ placeholder, register, errors, label }) {
  return (
    <Col sm={12} lg={6} md={6}>
      <Form.Group className="mb-3 input-group-lg">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...register()} type="date" placeholder={placeholder} />
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
      name: "",
      Fname: "",
      department: "",
      semester: "",
      address: "",
      email: "",
      phone: "",
      date: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <Col md={7}>
      <Row className="d-flex mb-3">
        <Col md={12} lg={12} sm={12}>
          <Heading heading="Library MemberShip Form" />
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-2">
          <Input
            placeholder="Your Name"
            register={() => register("name")}
            errors={errors.name}
          />
          <Input
            placeholder="Father Name"
            register={() => register("Fname")}
            errors={errors.Fname}
          />
          <Input
            placeholder="Department Name"
            register={() => register("department")}
            errors={errors.department}
          />
          <Input
            placeholder="Semester"
            register={() => register("semester")}
            errors={errors.semester}
          />
          <Input
            placeholder="Enter Email"
            register={() => register("email")}
            errors={errors.email}
          />
          <Input
            placeholder="Phone No"
            register={() => register("phone")}
            errors={errors.phone}
          />
          <Input
            placeholder="Residential Address"
            register={() => register("address")}
            errors={errors.address}
          />
          <Input
            placeholder="Permanent Address"
            register={() => register("address")}
            errors={errors.address}
          />
          <FormDate
            placeholder="DD/MM/yy"
            register={() => register("date")}
            errors={errors.date}
            label="Session From"
          />
          <FormDate
            placeholder="DD/MM/yy"
            register={() => register("date")}
            errors={errors.date}
            label="To"
          />
          <button
            className="btn btn-primary form-control py-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </Row>
      </Form>
    </Col>
  );
}
