/* eslint-disable react/prop-types */
const DuoLabelsTextInput = ({labelName, labelDescription, textValue, onChangeHandler}) => {
  return (
    <label className="form-control w-full">
      <div className="label px-0" style={{ display: "flex", flexDirection: "column" }}>
        <span className="label-text font-bold text-xl text-slate-200 mr-auto">{labelName}</span>
        <span className="label-text italic text-sm text-slate-200 mr-auto">{labelDescription}</span>
      </div>
      <input type="text" className="input input-bordered w-full" value={textValue} onChange={onChangeHandler} />
    </label>
  );
}

export default DuoLabelsTextInput