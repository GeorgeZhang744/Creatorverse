/* eslint-disable react/prop-types */
const SingleLabelTextInput = ({ labelName, textValue, onChangeHandler }) => {
  return (
    <label className="form-control w-full">
      <div className="label px-0">
        <span className="label-text font-bold text-slate-200 text-xl">{labelName}</span>
      </div>
      <input type="text" className="input input-bordered w-full" value={textValue} onChange={onChangeHandler} />
    </label>
  );
};

export default SingleLabelTextInput;
