import { useState, useEffect, useRef } from "react";

const RangeSlider = ({ initialMin, initialMax, min, max, step, priceGap }) => {
  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(initialMin);
  const [maxValue, setMaxValue] = useState(initialMax);

  const handleMin = (e) => {
    if (maxValue - minValue >= priceGap && maxValue <= max) {
      if (parseInt(e.target.value) > parseInt(maxValue)) {
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= priceGap && maxValue <= max) {
      if (parseInt(e.target.value) < parseInt(minValue)) {
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * step + "%";
    progressRef.current.style.right = step - (maxValue / max) * step + "%";
  }, [minValue, maxValue, max, step]);

  return (
    <div className="flex flex-col rounded-lg ">
      <div className="flex justify-between items-center mb-7 ">
        <div className="rounded-md">
          <span className="p-2 font-semibold"> Min</span>
          <input
            onChange={(e) => setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-24 rounded-md border border-gray"
          />
        </div>
        <div className="ml-2 font-semibold text-lg"> - </div>
        <div className=" ">
          <span className="p-2 font-semibold"> Max</span>
          <input
            onChange={(e) => setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-24 rounded-md border border-gray"
          />
        </div>
      </div>

      <div className="mb-4">
        <div className="slider relative h-1 rounded-md bg-gray">
          <div
            className="progress absolute h-1 bg-green rounded "
            ref={progressRef}
          ></div>
        </div>

        <div className="range-input relative  ">
          <input
            onChange={handleMin}
            type="range"
            min={min}
            step={step}
            max={max}
            value={minValue}
            className="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />

          <input
            onChange={handleMax}
            type="range"
            min={min}
            step={step}
            max={max}
            value={maxValue}
            className="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
