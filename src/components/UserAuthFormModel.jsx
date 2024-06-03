import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Link
} from "@nextui-org/react";
import {MdOutlineEmail} from "react-icons/md";
import {EyeSlashFilledIcon} from "../common/EyeSlashFilledIcon.jsx";
import {EyeFilledIcon} from "../common/EyeFilledIcon.jsx";
import { TRANSITION_EASINGS } from "@nextui-org/framer-transitions";

function UserAuthFormModel() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <>
            <Button onPress={onOpen} className={"bg-black text-white w-16 md:w-24  h-10 rounded-full"}>登录</Button>
            <Modal
                key={"modal"}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                className={"overflow-hidden"}
                motionProps={{
                    variants: {
                            enter: {
                                scale: 1,
                                y: 0,
                                opacity: 1,
                                transition: {
                                    y: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.6,
                                    },
                                },
                            },
                            exit: {
                                scale: 1.1, // NextUI default 1.03
                                y: 0,
                                opacity: 0,
                                transition: {
                                    duration: 0.3,
                                    ease: TRANSITION_EASINGS.ease,
                                },
                            },
                        }}}
            >
                <ModalContent className={"flex items-center justify-center "}>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row w-36 h-12 items-center justify-center">
                                <span className={"text-center font-bold "}>欢迎回来</span>
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MdOutlineEmail className="text-2xl  pointer-events-none flex-shrink-0"/>
                                    }
                                    label="Email"
                                    variant={"bordered"}
                                    className={"w-80 h-16 "}
                                />
                                <Input
                                    label="Password"
                                    variant="bordered"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <EyeSlashFilledIcon className="text-2xl  pointer-events-none"/>
                                            ) : (
                                                <EyeFilledIcon className="text-2xl  pointer-events-none"/>
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                    className={"w-80 h-16 "}

                                />
                                <div className="flex py-2 px-1 justify-end">
                                    <Link color="primary" href="#" size="sm">
                                        忘记密码?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>

                                <Button className={"bg-black text-white  w-24  h-10 rounded-full"} onPress={onClose}>
                                    <span className={"font-bold "}>登录</span>
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </>
    );
}

export default UserAuthFormModel;