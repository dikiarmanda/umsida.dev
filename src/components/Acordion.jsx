export default function Acordion({ step, body }) {
  return (
    <div className="join join-vertical w-2/3 mx-auto mb-5">
      <div className="collapse join-item collapse-arrow border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">{step}</div>
        <div className="collapse-content">
          {body.map((item, index) => (
            <div key={index} className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">{item}</span>
                <input type="checkbox" className="checkbox checkbox-secondary" />
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
