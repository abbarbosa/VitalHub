import { Modal } from "react-native";
import { AppointmentModalpront,  ImagePront, Informations,  } from "./Style";
import { Age, Email, Title } from "../title/Style";
import { Button, ButtonSecondary, ButtonSecondaryTitle, ButtonTitle, TextButtonPront } from "../button/Style";
import { ModalContent, ModalText } from "../cancelationModal/Style";




const AppointmentModal = ({visible, navigation, setShowModalAppointment,  ...rest }) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">
            <AppointmentModalpront>

                <ModalContent>

                    <ImagePront source={{ uri: "https://github.com/ojuaum1.png" }} />
                    <Title>João Oliveira</Title>

                    <Informations>
                        <Age>19 anos</Age>
                        <Email>joao.oliveiira.pda@gmail.com</Email>
                    </Informations>

                    <Button onPress={() => navigation.navigate("MedicalRecord")}>
                        <TextButtonPront>Inserir prontuário</TextButtonPront>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalAppointment(false)}>
                        <ButtonSecondaryTitle>
                            Cancelar
                        </ButtonSecondaryTitle>
                    </ButtonSecondary>

                </ModalContent>

            </AppointmentModalpront>
        </Modal>
    );
};

export default AppointmentModal;