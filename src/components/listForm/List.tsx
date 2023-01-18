import { TodoType } from 'interfaces';
import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { todoActions } from '../../redux/modules/todo';

const List = ({ globalTodo }: { globalTodo: TodoType }) => {
  // 진행 중 또는 완료, 수정 인풋, 수정 버튼의 조건 state
  const [editing, setEditing] = useState(false);
  // 인풋의 title, body 벨류 state
  const [editTitle, setEditTitle] = useState(globalTodo.title);
  const [editBody, setEditBody] = useState(globalTodo.body);

  // 수정하는 title 벨류의 onChange
  const editTitleValue = (event: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value);
  };
  // 수정하는 body 벨류의 onChange
  const editBodyValue = (event: ChangeEvent<HTMLInputElement>) => {
    setEditBody(event.target.value);
  };

  // useNavigate, useDispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redux store로, inDone의 조건인 id를 보내는 onSubmit
  const confirmToDo = (event: MouseEvent<HTMLButtonElement>) => {
    dispatch(todoActions.confirmTodo(event.currentTarget.id));
  };

  // redux store로, delete의 조건인 id를 보내는 onSubmit
  const deleteToDo = (event: MouseEvent<HTMLButtonElement>) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(todoActions.deleteTodo(event.currentTarget.id));
      alert('삭제되었습니다.');
    }
  };
  // redux store로 보내는 title, body 수정 onSubmit
  const onEditSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      todoActions.editTodo({
        title: editTitle,
        body: editBody,
        id: event.currentTarget.id,
      })
    );
    setEditing(false);
  };

  // editing state를 바꾸는 onClick
  const editingToggle = () => {
    setEditing((prev) => !prev);
  };

  return (
    <ListStyle key={globalTodo.id}>
      <div id={globalTodo.id}>
        <div>
          <form onSubmit={onEditSubmit} id={globalTodo.id}>
            <div>
              {editing ? (
                <TitleBodyStyle>
                  <TitleInput
                    onChange={editTitleValue}
                    type="text"
                    value={editTitle}
                    required
                  />
                  <BodyInput
                    onChange={editBodyValue}
                    type="text"
                    value={editBody}
                    required
                  />
                </TitleBodyStyle>
              ) : (
                <TitleBodyStyle>
                  <TitleStyle>{globalTodo.title}</TitleStyle>
                  <BodyStyle>{globalTodo.body}</BodyStyle>
                </TitleBodyStyle>
              )}
            </div>
            {globalTodo.isDone ? null : (
              <EditButton>
                <button type="button" onClick={editingToggle}>
                  {editing ? '수정취소' : '수정하기'}
                </button>
                {editing ? <button>수정완료</button> : null}
              </EditButton>
            )}
            <Hr />
          </form>
        </div>
        <OtherButton>
          <div>
            <button
              onClick={() => {
                navigate(`/${globalTodo.id}`);
              }}
            >
              상세페이지
            </button>
          </div>
          <div>
            <button onClick={confirmToDo} id={globalTodo.id}>
              {!globalTodo.isDone ? '완료' : '취소'}
            </button>
            <button onClick={deleteToDo} id={globalTodo.id}>
              삭제
            </button>
          </div>
        </OtherButton>
      </div>
    </ListStyle>
  );
};
export default List;

const ListStyle = styled.div`
  background-color: #efececc5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 260px;
  border: 1px solid black;
  margin: 10px 50px 10px 50px;
`;

const TitleBodyStyle = styled.div`
  width: 300px;
  min-width: 200px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.div`
  width: 65%;
  padding: 5px 35px 5px 35px;
  text-align: center;
  margin: 5px;
  color: white;
  background-color: black;
`;
const BodyStyle = styled.div`
  height: 100px;
  width: 65%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 35px 10px 35px;
  margin-bottom: 10px;
`;
const TitleInput = styled.input`
  width: 90%;
  padding: 5px 0 5px 0;
  border: 2px solid blue;
  text-align: center;
  margin: 5px;
  background-color: #cacaca;
`;
const BodyInput = styled.input`
  height: 100px;
  width: 90%;
  border: 2px solid blue;
  text-align: center;
  padding: 10px 0 10px 0;
  margin-bottom: 10px;
`;
const EditButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const OtherButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;
const Hr = styled.hr`
  width: 95%;
`;
