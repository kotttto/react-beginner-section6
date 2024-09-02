export const ColorfulMessage = ({ color, children }) => {
  //分割代入
  //   const { color, children } = props;

  console.log("---ColorfulMessage---");
  //親に引きずられて子も再レンダリング

  const contentStyleA = {
    // color: color,
    color, //省略記法
    fontsize: "18px",
  };

  return <p style={contentStyleA}>{children}</p>;
  //childrenでタグで囲まれたモノを指定する
};

// export default ColorfulMessage;
