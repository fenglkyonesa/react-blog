import React, {useState} from 'react';
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

function UserAuthFormModel() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <>
            <Button onPress={onOpen} className={"bg-black text-white w-16 md:w-24  h-10 rounded-full"}>登录</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                className={" overflow-x-hidden "}
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
                                    className={"w-96 h-16 "}
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
                                    className={"w-96 h-16 "}

                                />
                                <div className="flex py-2 px-1 justify-end">
                                    <Link color="primary" href="#" size="sm">
                                        忘记密码?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>

                                <Button className={"w-32 h-12"} onPress={onClose}>
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