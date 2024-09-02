//コンポーネント化
//拡張子jsx
//コンポーネント名は大文字始まりのパスカルケース(アッパーキャメルケース)
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("---App---"); //再レンダリングの理解
  //StrictMode使っていると二回レンダリングされる
  const [num, setNum] = useState(0); //setNumは更新関数
  const [isShowFace, setIsShowFace] = useState(false);
  const onClickCountup = () => {
    setNum((prev) => prev + 1);
    // setNum((prev) => prev + 1);

    // setNum(num + 1);
  };

  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  useEffect(() => {
    console.log("---useEffect---");
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]); //numが変化したときにこの関数(useEffect)が呼び出される

  return (
    // divtagを使って一つのまとまりにしないといけないorReact.fragmentを使うor空tagを使う
    <div>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です！</ColorfulMessage>

      {/* {}のなかでjavascriptかける */}
      <button onClick={onClickCountup}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(^^)</p>}
    </div>
  );
};
