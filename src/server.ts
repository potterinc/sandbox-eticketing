import app from "./app";
import AppConfig from "./config/app.config";

app.listen(AppConfig.PORT, () => console.table([{ SERVER2: AppConfig.PROCESSING_SERVER_HOST, PORT: AppConfig.PORT }]))
