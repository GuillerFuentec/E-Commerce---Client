import { Game } from "@/api"
export {default} from "./game"

export async function getServerSideProps(contex) {
    const {params:{game}} = contex;

    const gameCtrl = new Game();
    const gameResponse = await gameCtrl.getGameBySlug(game)

    return {
        props:{
            game: gameResponse,
        }
    }
}