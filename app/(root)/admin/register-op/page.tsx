import Image from "next/image";

import RegisterForm from "@/components/shared/forms/RegisterForm";

const Register = () => {
  
  return (
    <div className="flex h-screen justify-center max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/LogoHMS.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm />

          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>
    </div>
  );
};

export default Register;
