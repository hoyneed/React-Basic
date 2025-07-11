import { useMemo, useState } from "react";

function Memo() {
    // useMemo
    // useMemo를 상요하면 함수 컴포넌트 내부에서 발생하는 연산을 최적화 할 수 있습니다.
    // 먼저, 리스트에 숫자를 추가하면 추가된 숫자들의 평균을 보여 주는 함수 컴포넌트를 작성해 봅시다.
    const getAverage = (numbers: number[]) => {
        console.log("평균값을 계산 중입니다.");
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    };

    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>("");

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    };
    const onInsert = () => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber(""); //
    };

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="number" value={number} onChange={onChange} />{" "}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value: number, index: number) => {
                    return <li key={index}>{value}</li>;
                })}
            </ul>
            <div>
                <b>평균값:</b> {getAverage(list)}
                {/* {avg} */}
            </div>
        </div>
    );
}

export default Memo;
