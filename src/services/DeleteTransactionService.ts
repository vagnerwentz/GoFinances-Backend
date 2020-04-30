import { getCustomRepository } from 'typeorm';

/* Repositories */
import TransactionRepository from '../repositories/TransactionsRepository';

import AppError from '../errors/AppError';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('This transaction does not exists.', 400);
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
