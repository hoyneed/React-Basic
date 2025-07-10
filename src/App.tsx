import { useState } from "react";

function App() {
    // useState => Hooks
    // useState는 가장 기본적인 Hook이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줍니다.
    const [value, setValue] = useState<number>(5); // => 이 함수가 호출되면 배열을 반환한다.
    const [name, setName] = useState<string>("noName");
    const [nickname, setNickname] = useState<string>("스나이퍼팩토리");
    // useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다. => 첫 번째 요소는 상태 값, 두 번째 요소는 상태를 설정하는 함수
    const increment = () => setValue(value + 1);
    const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
    };
    return (
        <div>
            <div>
                <p>
                    현재 카운터 값은 <b>{value}</b>
                </p>
                <button onClick={increment}>1 증가</button>
                <button onClick={() => setValue(value - 1)}>1 감소</button>
            </div>
            <div>
                <input type="text" value={name} onChange={onChangeName} />
                <input
                    type="text"
                    value={nickname}
                    onChange={onChangeNickname}
                />
            </div>
            <div>
                <b>이름: {name}</b>
                <b>닉네임: {nickname}</b>
            </div>
        </div>
    );
}

export default App;
