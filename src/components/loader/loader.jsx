import { SpinnerDotted } from "spinners-react";
export const Loader = () => {

    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <SpinnerDotted color="rgb(37 99 235)" size="19%" speed="100" />
      </div>
    );
}