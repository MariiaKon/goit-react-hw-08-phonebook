import {
  Container,
  SecondaryTitle,
  Overlay,
} from 'views/Contacts/ContactsView.styled';
import { FormElement } from 'components/Forms/FormElement';
import { Label, Input } from 'components/Forms/Form.styled';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const navigate = useNavigate();
  const LoginFormHandler = async user => {
    try {
      await console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Overlay>
      <Container>
        <SecondaryTitle>Log In</SecondaryTitle>
        <FormElement
          onSubmit={e => {
            e.preventDefault();
            LoginFormHandler({
              email: e.target.email.value,
              password: e.target.password.value,
            });
            navigate('/contacts');
          }}
          btnContent={'Log In'}
          children={
            <>
              <Label>
                <Input
                  name="email"
                  type={'email'}
                  required
                  autoComplete="off"
                />
                <span>Email</span>
              </Label>
              <Label>
                <Input
                  name="password"
                  type={'password'}
                  required
                  autoComplete="off"
                />
                <span>Password</span>
              </Label>
            </>
          }
        />
      </Container>
    </Overlay>
  );
}
