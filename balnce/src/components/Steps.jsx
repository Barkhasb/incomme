function Steps({ step }) {
  const stepTexts = ["Currency", "Balance", "Finish"];

  return (
    <ul className="steps flex items-center">
      {stepTexts.map((item, index) => (
        <div className="flex items-center ">
          <div key={index} className="flex flex-col items-center gap-y-2">
            <li
              className={`w-10 h-10 text-white flex items-center justify-center rounded-full ${
                step >= index ? "bg-blue-500" : "bg-gray-500"
              } `}
            >
              {index + 1}
            </li>
            <p>{item}</p>
          </div>
          {index < stepTexts.length - 1 && (
            <span
              className={`h-2 w-20 ${
                step > index ? "bg-blue-500" : "bg-gray-500"
              } mb-6 rounded-lg`}
            ></span>
          )}
        </div>
      ))}
    </ul>
  );
}

export default Steps;
