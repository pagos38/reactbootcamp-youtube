import { Button, TextField, Typography } from "@material-ui/core";

import useStyle from "./style";

export const UploadForm = () => {
    const styles = useStyle();

    return (
        <>
            <label className={styles.label}>
                <Typography variant="body2">タイトル</Typography>
                <TextField size="small" fullWidth variant="outlined" />
            </label>

            <label className={styles.label}>
                <Typography variant="body2">説明</Typography>
                <TextField
                    size="small"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={4}
                />
            </label>

            <div className={styles.butotn}>
                <Button variant="contained" color="primary">
                    動画をアップロード
                </Button>
            </div>
        </>
    );
};
