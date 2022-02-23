function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </Col>
          </Row>
          <Row>
            <Form.Group as={Col} xs={6} controlId="profileId">
              <Form.Label>Profile Id</Form.Label>
              <Form.Control required type="text" placeholder="Profile Id" />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} xs={6} controlId="profileDesc">
              <Form.Label>Profile Desc</Form.Label>
              <Form.Control required type="text" placeholder="Profile Desc" />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} xs={6} controlId="waiveLimit">
              <Form.Label>Waive Limit</Form.Label>
              <Form.Control as="select" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} xs={6} controlId="correctLimit">
              <Form.Label>Correct Limit</Form.Label>
              <Form.Control as="select" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Row>
        </Col>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

render(<FormExample />);
