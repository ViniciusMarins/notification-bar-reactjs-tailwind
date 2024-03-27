import { MdOutlineRocket } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiAtSign, FiSave } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";
import { IoChatboxOutline, IoClose } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";

function Notification() {
  return (
    <div className="w-[440px] rounded overflow-hidden shadow-2xl mt-20 md:mt-0 md:scale-[0.9]">
      <div className="p-5 bg-zinc-300 dark:bg-zinc-800 flex items-center justify-between text-sm">
        <span className="dark:text-white font-bold text-base">
          Notificações
        </span>
        <p className="dark:text-violet-500 dark:hover:text-violet-600 cursor-pointer text-bold text-violet-700 hover:text-violet-500">
          MARCAR TODAS COMO VISTAS
        </p>
      </div>

      <section className="dark:bg-zinc-950 bg-black/15">
        <div className="dark:bg-zinc-950 py-2 px-4 dark:text-zinc-500 text-sm font-bold bg-black/15">
          Recentes
        </div>

        <div className="flex flex-col gap-[0.18rem] ">
          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <MdOutlineRocket className="text-2xl  text-violet-500 " />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-0 right-0" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                Um novo vídeo de{" "}
                <span className="font-bold">Vinícius Assunção </span>
                foi publicado no
                <span className="font-bold"> ExpertsClub!</span> Vem conferir!
              </p>
              <span className="text-zinc-600 text-xs">
                Novo conteúdo - Há 3 min
              </span>
            </div>
          </div>

          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-6 mt-2">
              <HiOutlineMail className="text-2xl  text-violet-500 " />
              <span className="absolute w-2 h-2 bg-red-500 rounded-full top-0 right-0" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                Você recebeu um <span className="font-bold">convite </span>
                para fazer parte da empresa
                <span className="font-bold"> JetStore</span>
              </p>
              <span className="text-zinc-600 text-xs">
                Novo conteúdo - Há 3 min
              </span>
            </div>

            <div className="gap-2 flex items-center justify-center ml-6">
              <button className="p-2 rounded-md dark:bg-zinc-700 dark:hover:bg-zinc-700/70 bg-zinc-400 hover:bg-zinc-400/70  h-8 inline">
                <IoClose className="text-normal dark:text-white" />
              </button>
              <button className="p-2 rounded-md bg-violet-500 hover:bg-violet-600 h-8 inline">
                <IoMdCheckmark className="text-normal dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="dark:bg-zinc-950 bg-black/15">
        <div className="dark:bg-zinc-950 py-2 px-4 dark:text-zinc-500 text-sm font-bold bg-black/15">
          Antigas
        </div>

        <div className="flex flex-col gap-[0.18rem] ">
          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <BsFillPeopleFill className="text-2xl  text-violet-500 " />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                Você foi <span className="font-bold">mencionado </span>
                no tópico
                <span className="font-bold">
                  {" "}
                  "Como fazer massa de modelar com JavaScript",
                </span>{" "}
                por <span className="font-bold">Manin da Silva.</span>
              </p>
              <span className="dark:text-zinc-600 text-xs">
                Fórum Ignite - Há 4 horas
              </span>
            </div>
          </div>

          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <IoIosHeartEmpty className="text-2xl  text-violet-500 " />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                <span className="font-bold">
                  {" "}
                  Flávia Oliveira e mais 5 pessoas{" "}
                </span>{" "}
                gostaram do seu comentário.
              </p>
              <span className="dark:text-zinc-600 text-xs">
                Feed - Há 4 horas
              </span>
            </div>
          </div>

          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <FiAtSign className="text-2xl  text-violet-500 " />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                Manin da Silva <span className="font-bold">mencionou </span>
                você em uma publicação.
              </p>
              <span className="dark:text-zinc-600 text-xs">
                Feed - Há 4 horas
              </span>
            </div>
          </div>

          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <FiSave className="text-2xl  text-violet-500 " />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                5 pessoas salvaram sua publicação.
              </p>
              <span className="dark:text-zinc-600 text-xs">
                Feed - Há 4 horas
              </span>
            </div>
          </div>

          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <PiShareFat className="text-2xl  text-violet-500 " />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                <span className="font-bold">Mariana Costa </span>
                compartilhou sua publicação.
              </p>
              <span className="dark:text-zinc-600 text-xs">
                Feed - Há 4 horas
              </span>
            </div>
          </div>

          <div className="p-5 dark:bg-zinc-900 bg-zinc-300 flex">
            <div className="relative mr-8 mt-2">
              <IoChatboxOutline className="text-2xl  text-violet-500 " />
            </div>

            <div className="flex flex-col gap-2">
              <p className="dark:text-white text-sm font-light leading-6">
                <span className="font-bold">Manin da Silva </span>
                comentou em sua publicação.
              </p>
              <span className="dark:text-zinc-600 text-xs">
                Feed - Há 1 hora
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notification;
