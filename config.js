module.exports = {
  MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://empiretech:kkVDB0ooTlgIsH11@cluster0.js7ra.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  mega: {
    email: process.env.EMAIL || 'empiretech@duck.com', // Your MEGA email
    password: process.env.PASS || 'Jehovah@1B', // Your MEGA password
    storagePath: './storage' // Local storage path for MEGA
  },
  server: {
    port: process.env.PORT || 3000, // Server port
    domain: process.env.DOMAIN || 'https://cdn.empiretech.biz.id', // Your domain base URL
    maxFileSize: 1024 * 1024 * 200, // 100 MB file size limit
    allowedTypes: [ // Allowed MIME types for file uploads
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp',
      'image/bmp',
      'image/svg+xml',
      'image/tiff',
      'image/x-icon',
      'image/heic',
      'image/heif',
      'image/avif',
      'video/mp4',
      'video/webm',
      'video/ogg',
      'video/quicktime',
      'video/x-msvideo',
      'video/x-matroska',
      'video/3gpp',
      'video/3gpp2',
      'video/x-ms-wmv',
      'video/mpeg',
      'video/avi',
      'audio/mpeg',
      'audio/mp3',
      'audio/mp4',
      'audio/wav',
      'audio/wave',
      'audio/webm',
      'audio/ogg',
      'audio/aac',
      'audio/flac',
      'audio/x-m4a',
      'audio/x-ms-wma',
      'audio/midi',
      'audio/x-midi',
      'text/plain',
      'text/html',
      'text/css',
      'text/javascript',
      'text/csv',
      'text/xml',
      'text/markdown',
      'text/rtf',
      'application/pdf',
      'application/msword',
      'application/vnd.ms-excel',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.oasis.opendocument.text',
      'application/vnd.oasis.opendocument.spreadsheet',
      'application/vnd.oasis.opendocument.presentation',
      'application/rtf',
      'application/x-abiword',
      'application/zip',
      'application/x-zip-compressed',
      'application/x-rar-compressed',
      'application/x-7z-compressed',
      'application/x-tar',
      'application/gzip',
      'application/x-bzip',
      'application/x-bzip2',
      'application/json',
      'application/ld+json',
      'application/xml',
      'application/javascript',
      'application/typescript',
      'application/x-httpd-php',
      'application/x-yaml',
      'application/graphql',
      'application/sql',
      'font/ttf',
      'font/otf',
      'font/woff',
      'font/woff2',
      'application/x-font-ttf',
      'application/x-font-otf',
      'application/font-woff',
      'application/font-woff2',
      'application/octet-stream',
      'application/x-www-form-urlencoded',
      'multipart/form-data',
      'text/calendar',
      'application/vnd.android.package-archive',
      'application/x-msdownload',
      'application/x-apple-diskimage'
    ],
    cacheTTL: 3400 // Cache TTL in seconds (1 hour)
  },
  rateLimit: {
    max: 1000, // Maximum requests per time window
    timeWindow: '1 minute' // Time window for rate limiting
  },
  storage: process.env.TEMP || 'memory' // Storage type ('file' or 'memory')
};
