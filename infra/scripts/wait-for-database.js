import { exec } from 'node:child_process';

function checkDatabase() {
    exec('docker exec postgres-db pg_isready --host localhost', handleReturn);

    function handleReturn(error, stdout) {
        if (stdout.search('accepting connections') === -1) {
            process.stdout.write('.');
            checkDatabase();
            return;
        }

        console.log('\n Banco de Dados (PostgreSQL) está aceitando conexões');
    }
}

process.stdout.write('\n\n Aguardando o banco de dados aceitar conexões');
checkDatabase();
