import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { todoActions } from '../../redux/modules/todo';

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputStyle = styled.input`
  margin: 5px;
  height: 20px;
`;
const Form = () => {
  // title, body state
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();

  // title, body onChange
  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const onChangeBody = (event: ChangeEvent<HTMLInputElement>) =>
    setBody(event.target.value);

  // submit
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title === '' || body === '') {
      return;
    }
    dispatch(
      todoActions.addTodo({
        id: `${Date.now()}`,
        title: title,
        body: body,
        isDone: false,
      })
    );
    setTitle('');
    setBody('');
  };

  return (
    <FormStyle>
      <form onSubmit={onSubmit}>
        <InputStyle
          onChange={onChangeTitle}
          value={title}
          type="text"
          placeholder="할 일 제목"
          maxLength={24}
          required
        />
        <InputStyle
          onChange={onChangeBody}
          value={body}
          type="text"
          placeholder="할 일 내용"
          maxLength={120}
          required
        />
        <button>작성완료</button>
      </form>
      <hr></hr>
    </FormStyle>
  );
};

export default Form;
