import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAnswer } from '../../modules/test';
import TestForm from './TestForm';

function TestFormContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [answer, setAnswer] = useState('');
  const regExp = /[\{\}\[\]\/?;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
  const questions = [
    '평소에 좋아하던 음식이 식탁 위에 차려져 있네요. 이를 본 당신의 기분과 생각이 어떨지 적어주세요',
    '최근 계속 울적한 기분을 느껴 떨쳐내기 어려웠던 당신에게 누군가가 당신을 위한 진심 어린 위로를 해 주고 있네요. 이때 당신이 느낄 기분을 적어주세요.',
    '길을 가던 중 오랫동안 보지 못했던 친구를 만났습니다. 친구는 반가운 마음에 당신에게 그동안 잘 지냈는지 묻습니다. 이때 당신의 속마음을 적어주세요.',
    '지난 일주일간 있었던 일을 잠시 눈을 감고 돌이켜보세요. 어떤 생각이 드는지 적어주세요.',
    '10년 후 당신의 모습을 떠올려보세요. 당신의 미래는 어떠한가요?',
    '책장 정리를 하다가 일기장을 모아둔 박스를 찾았습니다. 방 한구석에 자리를 잡고 앉아 어릴 적부터 써온 일기를 쭉 읽어본 당신. 당신은 어떤 생각에 잠기게 될까요?',
    '당신이 속한 집단에서 중요한 직책을 맡아달라는 부탁을 받았습니다. 당신은 어떤 선택을 할 것이며 그 이유는 무엇일까요?',
    '당신의 지난밤은 어땠나요?',
    '눈이 내리는 크리스마스, 당신은 불빛으로 반짝이는 거리를 걷고 있습니다. 연인, 가족과 함께 걷고 있는 사람들이 보입니다. 이를 보는 당신의 기분은 어떠할까요?',
    '5년 만의 동창 모임에 나간 당신. 친구들은 당신에 대해 어떻게 생각하고 있을까요?',
  ];

  const initializePage = () => {
    setAnswer('');
  };

  const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const answer = e.target.value;
    if (regExp.test(answer)) {
      alert('답변에 "." 와 "," 를 제외한 특수 문자를 포함하지 말아주세요.');
    } else if (answer.length > 80) {
      alert('80자 이내로 작성해주세요.');
    } else {
      setAnswer(answer);
    }
  };

  const handlePrevious = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (page == 1) {
      alert('이전 페이지가 없습니다.');
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (answer.length < 5) {
      alert('답변을 5자 이상으로 작성해주세요.');
    } else {
      const pageKey = 'answer' + String(page);
      const testData = { pageKey: pageKey, answer: answer };
      dispatch(saveAnswer(testData));
      setPage(page + 1);
    }
  };

  return (
    <TestForm
      page={page}
      question={questions[page - 1]}
      answer={answer}
      initializePage={initializePage}
      handleText={handleText}
      handlePrevious={handlePrevious}
      handleNext={handleNext}
    />
  );
}

export default TestFormContainer;
