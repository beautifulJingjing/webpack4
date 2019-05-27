/**
 * Created by caojingjing on 2019/5/23.
 */
let mimetypes = (function () {
    return {
        js: 'application/x-javascript',
        css: 'text/css',
        less: 'text/css',
        jpg: 'image/jpg',
        jpeg: 'image/jpeg',
        gif: 'image/gif',
        png: 'image/png',
        bmp: 'image/bmp',
        swf: 'application/x-shockwave-flash',
        pdf: 'application/pdf',
        '7z': 'application/x-7z-compressed',
        rar: 'application/x-rar-compressed',
        zip: 'application/zip,application/x-zip-compressed',
        doc: 'application/msword',
        docx: 'application/msword',
        ppt: 'application/vnd.ms-powerpoint',
        pptx: 'application/vnd.ms-powerpoint',
        xls: 'application/vnd.ms-excel',
        xlsx: 'application/vnd.ms-excel',
        txt: 'text/plain',
        mp3: 'audio/mpeg',
        wma: 'audio/x-ms-wma',
        rm: 'application/vnd.rn-realmedia',
        rmvb: 'application/vnd.rn-realmedia',
        ra: 'audio/x-pn-realaudio',
        mid: 'audio/midi',
        wav: 'audio/x-wav',
        md: 'text/plain',
        avi: 'video/x-msvideo',
        mp4: 'video/mp4',
        m3u: 'audio/x-mpegurl',
        m4a: 'audio/mp4a-latm',
        m4b: 'audio/mp4a-latm',
        m4p: 'audio/mp4a-latm',
        m4u: 'video/vnd.mpegurl',
        m4v: 'video/x-m4v',
        '3gp': 'video/3gpp',
        ts: 'text/texmacs',
        wmv: 'video/x-ms-wmv',
        mkv: 'video/x-matroska',
        mov: 'video/quicktime'
    }
}());

export function getMimeTypes (extensions) {
    extensions = extensions.split(',');
    for (var key in extensions) {
        extensions.push(mimetypes[extensions[key]] || '*')
    }
    return extensions.join()
};
