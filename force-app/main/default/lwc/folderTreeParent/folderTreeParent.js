import { LightningElement } from 'lwc';

export default class FolderTreeParent extends LightningElement {
    folders = [
        {
            id: 1,
            name: 'Folder 1',
            files: ['File 1.1', 'File 1.2'],
            subfolders: [
                {
                    id: 2,
                    name: 'Subfolder 1.1',
                    files: ['File 1.1.1'],
                    subfolders: [
                        {
                            id: 4,
                            name: 'Subfolder 1.1.1',
                            files: ['File 1.1.1.1'],
                            subfolders: []
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: 'Folder 2',
            files: ['File 2.1'],
            subfolders: []
        }
    ];
}