import Sidebar from "ekklesia/app/components/sidebar/Sidebar";
import Image from "next/image";

export default function Auth() {
  return (
    <div>
      <Sidebar
        header={
          <div>
            <Image
              src="/logo_ekklesia.svg"
              alt="Logo da Ekklesia"
              width={100}
              height={100}
            />

            <h2>Welcome to Ekklesia</h2>
            <p>Join us in our mission.</p>
          </div>
        }
        body={
          <div>
            <h2>Join Us</h2>
            <p>Sign up to get started.</p>
          </div>
        }
        footer={
          <div>
            <p>Already have an account? Log in.</p>
          </div>
        }
      />
    </div>
  );
}
