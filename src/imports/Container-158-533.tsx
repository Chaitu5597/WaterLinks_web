import imgImageWithFallback from "figma:asset/c8367aae257e11d2521b267f32e4f7e7c158a546.png";

function ImageWithFallback() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}